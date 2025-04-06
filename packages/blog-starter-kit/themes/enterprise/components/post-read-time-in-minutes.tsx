import { useTranslation } from 'next-i18next';
import { useAppContext } from '../components/contexts/appContext';
import BookOpenSVG from './icons/svgs/BookOpenSVG';

type Props = { readTimeInMinutes: number };

export const ReadTimeInMinutes = ({ readTimeInMinutes }: Props) => {
	const { t } = useTranslation();
	const { isClientReady } = useAppContext();

	return (
		<>
			<p className="flex flex-row items-center">
				<BookOpenSVG className="mr-2 h-5 w-5 fill-current opacity-75" />
				<span>
					{readTimeInMinutes} {isClientReady ? t('min_read') : 'min read'}
				</span>
			</p>
		</>
	);
};
