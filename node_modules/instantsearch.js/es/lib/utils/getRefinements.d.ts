import type { SearchParameters, SearchResults } from 'algoliasearch-helper';
export declare type FacetRefinement = {
    type: 'facet' | 'exclude' | 'disjunctive' | 'hierarchical' | 'numeric' | 'tag' | 'query';
    attribute: string;
    name: string;
    count?: number;
    exhaustive?: boolean;
};
export declare type QueryRefinement = {
    type: 'query';
    query: string;
} & Pick<FacetRefinement, 'type' | 'attribute' | 'name'>;
export declare type NumericRefinement = {
    type: 'numeric';
    numericValue: number;
    operator: '<' | '<=' | '=' | '!=' | '>=' | '>';
} & FacetRefinement;
export declare type FacetExcludeRefinement = {
    type: 'exclude';
    exclude: boolean;
} & FacetRefinement;
export declare type Refinement = FacetRefinement | QueryRefinement | NumericRefinement | FacetExcludeRefinement;
declare function getRefinements(results: SearchResults | Record<string, never>, state: SearchParameters, includesQuery?: boolean): Refinement[];
export default getRefinements;
