import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Contact() {
	const { t } = useTranslation('common');

	return (
		// <Layout>
		// 	<Head>
		// 		<title>{t('contact', 'Contact')}</title>
		// 	</Head>
		// 	<Header />
		// 	<Container className="mb-16 mt-16 px-5">
		// 		<h1 className="mb-8 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
		// 			{t('contact', 'Contact')}
		// 		</h1>
		// 		<div className="prose dark:prose-dark mx-auto max-w-4xl">
		// 			<p className="text-lg leading-relaxed text-slate-600 dark:text-neutral-300">
		// 				{t('contact.content', 'Feel free to reach out using the form below or via email.')}
		// 			</p>

		// 			{/* Simple contact form */}
		// 			<div className="mt-8">
		// 				<form className="space-y-6">
		// 					<div>
		// 						<label
		// 							htmlFor="name"
		// 							className="block text-sm font-medium text-slate-700 dark:text-neutral-200"
		// 						>
		// 							{t('contact.name', 'Name')}
		// 						</label>
		// 						<input
		// 							type="text"
		// 							id="name"
		// 							className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-slate-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white sm:text-sm"
		// 						/>
		// 					</div>

		// 					<div>
		// 						<label
		// 							htmlFor="email"
		// 							className="block text-sm font-medium text-slate-700 dark:text-neutral-200"
		// 						>
		// 							{t('contact.email', 'Email')}
		// 						</label>
		// 						<input
		// 							type="email"
		// 							id="email"
		// 							className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-slate-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white sm:text-sm"
		// 						/>
		// 					</div>

		// 					<div>
		// 						<label
		// 							htmlFor="message"
		// 							className="block text-sm font-medium text-slate-700 dark:text-neutral-200"
		// 						>
		// 							{t('contact.message', 'Message')}
		// 						</label>
		// 						<textarea
		// 							id="message"
		// 							rows={4}
		// 							className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-slate-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white sm:text-sm"
		// 						></textarea>
		// 					</div>

		// 					<div>
		// 						<button
		// 							type="submit"
		// 							className="inline-flex justify-center rounded-md border border-transparent bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:bg-neutral-700 dark:hover:bg-neutral-600"
		// 						>
		// 							{t('contact.send', 'Send Message')}
		// 						</button>
		// 					</div>
		// 				</form>
		// 			</div>
		// 		</div>
		// 	</Container>
		// 	<Footer />
		// </Layout>
		<div>Contact Page</div>
	);
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale || 'vi')),
		},
	};
};
