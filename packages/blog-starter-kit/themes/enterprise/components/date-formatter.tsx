import { format, parseISO } from 'date-fns';
import { enUS, vi } from 'date-fns/locale';
import { useAppContext } from './contexts/appContext';
import { useEffect, useState } from 'react';

type Props = {
	dateString: string;
};

export const DateFormatter = ({ dateString }: Props) => {
	const { language } = useAppContext();
	const [formattedDate, setFormattedDate] = useState<string>('');

	useEffect(() => {
		const date = parseISO(dateString);
		const locale = language === 'en' ? enUS : vi;
		
		const formatPattern = language === 'en' ? 'LLLL d, yyyy' : 'd LLLL, yyyy';
		const formatted = format(date, formatPattern, { locale });
		
		setFormattedDate(formatted);
	}, [dateString, language]);

	if (!dateString) return null;

	return <time dateTime={dateString}>{formattedDate}</time>;
};
