import { useTranslation } from 'next-i18next';
import { useAppContext } from './contexts/appContext';
import { GithubSVG, HashnodeSVG, LinkedinSVG, XSVG } from './icons';

export const SocialLinks = ({ isSidebar }: { isSidebar?: boolean }) => {
	const { publication } = useAppContext();
	const hasSocialLinks = publication?.links
		? !Object.values(publication.links!).every((val) => val === '')
		: false;
	const { t } = useTranslation();
	return (
		<>
			<div
				className={`col-span-1 flex flex-row flex-wrap gap-1 text-slate-600 dark:text-neutral-300 md:flex-nowrap ${
					isSidebar ? 'justify-start' : 'justify-end'
				}`}
			>
				{hasSocialLinks && (
					<>
						<div className="flex flex-col items-center justify-center">
							<div className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 stroke-current"
									viewBox="0 0 24 24"
									fill="none"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<rect x="2" y="4" width="20" height="16" rx="2" />
									<path d="M22 7l-10 5L2 7" />
								</svg>
								<span className="mx-2">hieuhn0301.forwork@gmail.com</span>
							</div>
						</div>
						<span className="flex flex-row items-center justify-center p-2">{t('or')}</span>
						{publication.links?.twitter && (
							<a
								href={publication.links.twitter}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Find us on Twitter, external website, opens in new tab"
								className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
							>
								<XSVG className="h-5 w-5 stroke-current" />
							</a>
						)}
						{publication.links?.github && (
							<a
								href={publication.links.github}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Find us on Github, external website, opens in new tab"
								className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
							>
								<GithubSVG className="h-5 w-5 stroke-current" />
							</a>
						)}
						{publication.links?.linkedin && (
							<a
								href={publication.links.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Find us on Linkedin, external website, opens in new tab"
								className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
							>
								<LinkedinSVG className="h-5 w-5 stroke-current" />
							</a>
						)}
						{publication.links?.hashnode && (
							<a
								href={publication.links.hashnode}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Find us on Hashnode, external website, opens in new tab"
								className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
							>
								<HashnodeSVG className="h-5 w-5 stroke-current" />
							</a>
						)}
					</>
				)}
			</div>
		</>
	);
};
