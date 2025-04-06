import { useTranslation } from 'next-i18next';
import { Search } from './searchbar';

export const Navbar = () => {
	const { t } = useTranslation('common');
	return (
		<>
			<div className="grid grid-cols-1 items-center gap-5 pt-5 text-sm md:grid-cols-2">
				{/* <Search /> */}
				<div className="md:order-2">
					<Search />
				</div>
				<div className="md:order-1">
					{/* <SocialLinks />  */}
					<h2 className="text-xl font-bold leading-tight tracking-tight text-slate-900 dark:text-neutral-50 lg:text-3xl">
						{t('newest_posts')}
					</h2>
				</div>
			</div>
		</>
	);
};
