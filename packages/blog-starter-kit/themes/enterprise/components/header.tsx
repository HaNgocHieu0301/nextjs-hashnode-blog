import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { PublicationNavbarItem, PublicationNavigationType } from '../generated/graphql';
import { Button } from './button';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import HamburgerSVG from './icons/svgs/HamburgerSVG';
import UKFlagSVG from './icons/svgs/UKFlagSVG';
import VietnamFlagSVG from './icons/svgs/VietnamFlagSVG';
import { PublicationLogo } from './publication-logo';
import PublicationSidebar from './sidebar';

function hasUrl(
	navbarItem: PublicationNavbarItem,
): navbarItem is PublicationNavbarItem & { url: string } {
	return !!navbarItem.url && navbarItem.url.length > 0;
}

export const Header = () => {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '/';
	const [isSidebarVisible, setIsSidebarVisible] = React.useState<boolean>(false);
	const { publication, language, setLanguage } = useAppContext();
	const { t } = useTranslation('common');
	const router = useRouter();
	const toggleSidebar = () => {
		setIsSidebarVisible((prevVisibility) => !prevVisibility);
	};

	const handleLanguageChange = (selectedLanguage: string) => {
		setLanguage(selectedLanguage);
		const { pathname, query } = router;

		// If we're at the root path ("/")
		if (pathname === '/') {
			router.push('/', undefined, { locale: selectedLanguage });
			return;
		}

		const slugValue = query.slug || '';
		const slug = Array.isArray(slugValue) ? slugValue[0] : slugValue;

		// Handle the slug based on language
		let newSlug = slug;
		if (selectedLanguage === 'en' && !slug.endsWith('-en')) {
			newSlug = `${slug}-en`;
		} else if (selectedLanguage === 'vi' && slug.endsWith('-en')) {
			newSlug = slug.replace(/-en$/, '');
		}
		const newQuery = slug ? { ...query, slug: newSlug } : { ...query };

		router.push({ pathname, query: newQuery }, undefined, {
			locale: selectedLanguage,
		});
	};

	const navItems = [
		{
			id: '1',
			type: PublicationNavigationType.Link,
			label: t('home'),
			url: `/${language}`,
		},
		{
			id: '2',
			type: PublicationNavigationType.Link,
			label: t('about'),
			url: `/${language}/about`,
		},
		{
			id: '3',
			type: PublicationNavigationType.Link,
			label: t('contact'),
			url: `/${language}/contact`,
		},
		{
			id: '4',
			type: PublicationNavigationType.Link,
			label: t('blog'),
			url: `/${language}/blog`,
		},
	];

	const navList = (
		<ul className="flex flex-row items-center gap-1 text-white">
			{navItems.map((item) => (
				<li key={item.url}>
					<Link
						href={item.url}
						rel="noopener noreferrer"
						className="transition-200 flex h-10 items-center justify-center whitespace-nowrap rounded-full px-4 text-center transition-colors hover:bg-white hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white"
					>
						{item.label}
					</Link>
				</li>
			))}
		</ul>
	);

	return (
		<header className="border-b bg-slate-950 py-10 dark:border-neutral-800 dark:bg-neutral-900">
			<Container className="grid grid-cols-4 gap-5 px-1">
				<div className="col-span-2 flex flex-1 flex-row items-center gap-2 lg:col-span-1">
					<div className="lg:hidden">
						<Button
							type="outline"
							label=""
							icon={<HamburgerSVG className="h-5 w-5 stroke-current" />}
							className="rounded-xl border-transparent !px-3 !py-2 text-white hover:bg-slate-900 dark:hover:bg-neutral-800"
							onClick={toggleSidebar}
						/>

						{isSidebarVisible && (
							<PublicationSidebar navbarItems={navItems} toggleSidebar={toggleSidebar} />
						)}
					</div>
					<div className="hidden lg:block">
						<PublicationLogo />
					</div>
				</div>
				<div className="col-span-2 flex flex-row items-center justify-end gap-5 text-slate-300 lg:col-span-3">
					<nav className="hidden lg:block">{navList}</nav>
					<div className="hidden h-8 w-px bg-slate-300 lg:block"></div>
					{/* Language toggle switch with flags */}
					<div className="language-toggle">
						<button
							className="toggle-button"
							onClick={() => handleLanguageChange(language === 'en' ? 'vi' : 'en')}
							aria-label={`Switch to ${language === 'en' ? 'Vietnamese' : 'English'}`}
						>
							<div className="toggle-track">
								<div
									className={`toggle-indicator ${
										language === 'en' ? 'translate-x-[31px]' : 'translate-x-[0.5px]'
									}`}
								></div>
								<div className="flag-container vi-container">
									<VietnamFlagSVG className="h-5 w-5" />
								</div>
								<div className="flag-container uk-container">
									<UKFlagSVG className="h-5 w-5" />
								</div>
							</div>
						</button>
					</div>

					{/* <Button
						href={baseUrl}
						as="a"
						type="primary"
						label={t('common.bookDemo', {}, 'Book a demo')}
						className="flex h-10 w-[150px] items-center justify-center rounded-full text-sm font-medium"
					/> */}
				</div>
			</Container>
			<div className="mt-5 flex justify-center lg:hidden">
				<PublicationLogo />
			</div>

			<style jsx>{`
				.language-toggle {
					display: inline-block;
				}

				.toggle-button {
					background: none;
					border: none;
					cursor: pointer;
					padding: 0;
				}

				.toggle-track {
					position: relative;
					width: 74px;
					height: 40px;
					background-color: #333;
					border-radius: 40px;
					padding: 3px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					border: 2px solid #555;
					transition: all 0.3s ease;
					box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
				}

				.toggle-indicator {
					position: absolute;
					left: 3px;
					width: 32px;
					height: 32px;
					background-color: #fff;
					border-radius: 50%;
					transition: transform 0.3s ease;
					z-index: 1;
					box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
				}

				.flag-container {
					position: absolute;
					display: flex;
					justify-content: center;
					align-items: center;
					width: 34px;
					height: 34px;
					z-index: 2;
				}

				.vi-container {
					left: 3px;
				}

				.uk-container {
					right: 3px;
				}

				.transition-none {
					transition: none !important;
				}

				.transition-transform {
					transition-property: transform;
				}

				.duration-300 {
					transition-duration: 300ms;
				}
			`}</style>
		</header>
	);
};
