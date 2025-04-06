import Image from 'next/image';
import Link from 'next/link';
import { useAppContext } from './contexts/appContext';

type Props = {
	title: string;
	src: string;
	slug?: string;
	priority?: boolean;
};

export const CoverImage = ({ title, src, slug, priority = false }: Props) => {
	const { language } = useAppContext();
	const postURL = slug ? `/${slug}` : '';

	const image = (
		<div className="relative h-full pt-[52.5%]">
			<Image
				src={src}
				alt={`Cover Image for ${title}`}
				className="w-full rounded-md border object-cover hover:opacity-90 dark:border-neutral-800"
				fill
				unoptimized
				priority={priority}
			/>
		</div>
	);
	return (
		<div className="h-full sm:mx-0">
			{slug ? (
				<Link href={postURL} aria-label={title}>
					{image}
				</Link>
			) : (
				image
			)}
		</div>
	);
};
