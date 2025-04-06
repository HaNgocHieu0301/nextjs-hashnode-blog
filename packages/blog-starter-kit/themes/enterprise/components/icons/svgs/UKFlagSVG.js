import React from 'react';

export default function UKFlagSVG({ className }) {
	return (
		<svg width="24" height="16" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg" className={className}>
			<clipPath id="uk">
				<path d="M0 0v30h60V0z" />
			</clipPath>
			<g clipPath="url(#uk)">
				<path d="M0 0v30h60V0z" fill="#012169" />
				<path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
				<path d="M0 0l60 30m0-30L0 30" stroke="#C8102E" strokeWidth="4" clipPath="url(#uk)" />
				<path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
				<path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
			</g>
		</svg>
	);
}