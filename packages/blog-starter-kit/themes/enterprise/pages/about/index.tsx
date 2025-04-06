import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function About() {
	const { t } = useTranslation('common');

	return (
		// <Layout>
		// 	<Head>
		// 		<title>{t('about', 'About')}</title>
		// 	</Head>
		// 	<Header />
		// 	<Container className="mb-16 mt-16 px-5">
		// 		<h1 className="mb-8 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
		// 			{t('about', 'About')}
		// 		</h1>
		// 		<div className="prose dark:prose-dark mx-auto max-w-4xl">
		// 			<p className="text-lg leading-relaxed text-slate-600 dark:text-neutral-300">
		// 				{t('about.content', 'This is the About page. Add your content here.')}
		// 			</p>
		// 		</div>
		// 	</Container>
		// 	<Footer />
		// </Layout>
		<div>About Page</div>
	);
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale || 'vi')),
		},
	};
};
