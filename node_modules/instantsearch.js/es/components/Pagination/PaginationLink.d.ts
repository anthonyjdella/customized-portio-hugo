/** @jsx h */
import { h } from 'preact';
export declare type PaginationLinkComponentCSSClasses = {
    item: string;
    link: string;
};
export declare type PaginationLinkProps = {
    ariaLabel: string;
    cssClasses: PaginationLinkComponentCSSClasses;
    handleClick(pageNumber: number, event: MouseEvent): void;
    isDisabled: boolean;
    label: string;
    pageNumber: number;
    url?: string;
};
declare const PaginationLink: ({ cssClasses, label, ariaLabel, url, isDisabled, handleClick, pageNumber, }: PaginationLinkProps) => h.JSX.Element;
export default PaginationLink;
