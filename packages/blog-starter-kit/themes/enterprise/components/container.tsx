import { useAppContext } from './contexts/appContext';

type Props = {
	children?: React.ReactNode;
	className?: string;
};

export const Container = ({ children, className }: Props) => {
	return <div className={'container mx-auto ' + className}>{children}</div>;
};

export const TocAwareContainer = ({ children, className }: Props) => {
	const { post } = useAppContext();
	const hasToc = post?.features.tableOfContents.isEnabled && 
		post?.features.tableOfContents.items.length > 0;
	
	return (
		<div className={`container mx-auto transition-all duration-500 ${hasToc ? 'xl:pr-0 xl:pl-14' : ''} ${className || ''}`}>
			{children}
		</div>
	);
};
