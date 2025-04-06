import { useTranslation } from 'next-i18next';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';

export const Footer = () => {
	const { publication } = useAppContext();
	const { t } = useTranslation();
	const currentYear = new Date().getFullYear();

	return (
		<>
			<div className="relative w-full py-6">
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="w-full border-t border-gray-200 dark:border-neutral-800"></div>
				</div>
				<div className="relative flex justify-center">
					<div className="inline-flex items-center space-x-2 bg-white px-4 dark:bg-neutral-900">
						<div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-neutral-700"></div>
						<div className="h-2 w-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
						<div className="h-2 w-2 rounded-full bg-gray-500 dark:bg-neutral-500"></div>
					</div>
				</div>
			</div>
			<footer className="bg-white py-12 text-center dark:bg-neutral-900">
				<Container>
					{/* <div className="mb-8 flex flex-col items-center justify-center">
					<div>
						<PostAuthorInfo key={publication.author?.id?.toString()} author={publication.author} />
					</div>
				</div> */}
					<div className="mb-8 flex flex-col items-center justify-center">
						<h2 className="text-xl font-semibold lg:text-2xl">{t('connect_me')}</h2>
					</div>
					{/* Social Links */}
					<div className="mb-8 flex justify-center space-x-4">
						<SocialLinks isSidebar={false} />
					</div>

					{/* Copyright */}
					<p className="text-sm text-gray-500 dark:text-neutral-500">
						© {currentYear} @hieuhn0301
					</p>
				</Container>
			</footer>
		</>
	);
};
