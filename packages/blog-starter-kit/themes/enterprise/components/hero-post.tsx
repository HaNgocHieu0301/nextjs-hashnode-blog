import { resizeImage } from '@starter-kit/utils/image';
import Link from 'next/link';
import { DEFAULT_COVER } from '../utils/const';
import { useAppContext } from './contexts/appContext';
import { CoverImage } from './cover-image';
import { DateFormatter } from './date-formatter';

type Props = {
	title: string;
	coverImage: string | null | undefined;
	date: string;
	excerpt: string;
	slug: string;
};

export const HeroPost = ({ title, coverImage, date, excerpt, slug }: Props) => {
	const { language } = useAppContext();
	const postURL = `/${slug}`;

	return (
		<section className="grid h-full grid-cols-1 items-stretch gap-5 lg:grid-cols-2">
			<div className="col-span-1 h-full pt-0 lg:pt-12">
				<CoverImage
					title={title}
					src={resizeImage(coverImage, { w: 1000, h: 700, c: 'thumb' }, DEFAULT_COVER)}
					slug={slug}
				/>
			</div>
			<div className="col-span-1 flex h-full flex-col gap-2 pt-0 lg:pt-12">
				<h1 className="text-xl font-bold leading-snug text-slate-800 dark:text-neutral-50 lg:text-3xl">
					<Link
						href={postURL}
						className="hover:text-primary-600 dark:hover:text-primary-500 leading-tight tracking-tight hover:underline"
					>
						{title}
					</Link>
				</h1>
				<Link href={postURL}>
					<p className="text-md leading-snug text-slate-500 dark:text-neutral-400">{excerpt}</p>
				</Link>
				<div className="text-sm font-semibold text-slate-500 dark:text-neutral-300">
					<Link href={postURL}>
						<DateFormatter dateString={date} />
					</Link>
				</div>
			</div>
		</section>
	);
};
