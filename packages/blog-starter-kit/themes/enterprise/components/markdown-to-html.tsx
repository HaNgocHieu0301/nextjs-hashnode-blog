import { useEmbeds } from '@starter-kit/utils/renderer/hooks/useEmbeds';
import { markdownToHtml } from '@starter-kit/utils/renderer/markdownToHtml';
import { memo } from 'react';

type Props = {
	contentMarkdown: string;
};

const _MarkdownToHtml = ({ contentMarkdown }: Props) => {
	const content = markdownToHtml(contentMarkdown);
	useEmbeds({ enabled: true });

	const baseClasses = 'hashnode-content-style mx-auto w-full px-5 md:max-w-screen-lg';
	const proseTextClasses =
		'prose prose-h1:text-3xl prose-h2:text-2xl md:prose-h1:text-4xl md:prose-h2:text-3xl';
	const proseMarginClasses =
		'prose-hr:my-10 prose-h1:my-7 prose-h2:my-6 prose-p:my-4 prose-ul:my-4 prose-table:my-4';

	return (
		<div
			className={`
		  ${baseClasses}
		  ${proseTextClasses}
		  ${proseMarginClasses}
		`}
			dangerouslySetInnerHTML={{ __html: content }}
		/>
	);
};

export const MarkdownToHtml = memo(_MarkdownToHtml);
