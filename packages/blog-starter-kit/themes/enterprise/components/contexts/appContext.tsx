import { useRouter } from 'next/router';
import React, { createContext, useContext, useEffect, useState } from 'react';
import {
	PostFullFragment,
	PublicationFragment,
	SeriesPostsByPublicationQuery,
	StaticPageFragment,
} from '../../generated/graphql';
import i18n from '../../i18n/config';

type AppContext = {
	publication: PublicationFragment;
	post: PostFullFragment | null;
	page: StaticPageFragment | null;
	series: NonNullable<SeriesPostsByPublicationQuery['publication']>['series'];
	language: string;
	setLanguage: (lang: string) => void;
	isClientReady: boolean;
};

const AppContext = createContext<AppContext | null>(null);

const AppProvider = ({
	children,
	publication,
	post,
	page,
	series,
}: {
	children: React.ReactNode;
	publication: PublicationFragment;
	post?: PostFullFragment | null;
	page?: StaticPageFragment | null;
	series?: NonNullable<SeriesPostsByPublicationQuery['publication']>['series'];
}) => {
	// Initialize with 'en' to match the server-side rendering
	const [language, setLanguage] = useState('vi');
	const [isClientReady, setIsClientReady] = useState(false);
	const router = useRouter();

	useEffect(() => {
		// Wait for hydration to complete before changing language
		setIsClientReady(true);

		// Detect language from URL
		const currentPath = window.location.pathname;
		let detectedLanguage;

		// First check if path starts with a language prefix
		if (currentPath.startsWith('/en')) {
			detectedLanguage = 'en';
		} else if (currentPath.startsWith('/vi') || currentPath === '/') {
			detectedLanguage = 'vi';
		} else {
			// Fallback to checking if the slug ends with "-en"
			detectedLanguage = currentPath.endsWith('-en') ? 'en' : 'vi';
		}

		setLanguage(detectedLanguage);
		i18n.changeLanguage(detectedLanguage);
	}, [router.locale]);

	// Custom setLanguage function
	const handleSetLanguage = (lang: string) => {
		setLanguage(lang);
		i18n.changeLanguage(lang);
	};

	return (
		<AppContext.Provider
			value={{
				publication,
				post: post ?? null,
				page: page ?? null,
				series: series ?? null,
				language,
				setLanguage: handleSetLanguage,
				isClientReady,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

const useAppContext = () => {
	const context = useContext(AppContext);

	if (!context) {
		throw new Error('useAppContext must be used within a <AppProvider />');
	}

	return context;
};
export { AppProvider, useAppContext };
