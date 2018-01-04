// Generated by dts-bundle v0.7.3

export class Facet {
    constructor(options: IFacetOptions);
    showLoader: () => void;
    hideLoader: () => void;
    BindOnlyFacets: (facets: IFacet[]) => void;
    BindOnlyAppliedFilters: (filters: IFacet[]) => void;
    Bind: (facets: IFacet[], filters: IFacet[]) => void;
}

export interface IFacet {
    facetMeta: IFacetMeta;
    facetValues: IFacetValue[];
    facetRange: IFacetRange;
}

export interface IFacetOptions {
    facets: IFacetMeta[];
    containerElement: HTMLElement | null;
    onFilterChange: IFilterActionDelegate;
    onAllFilterRemove: IAllFilterRemoveDelegate;
}

export interface IFacetMeta {
    id: string;
    name: string;
    type: string;
}

export interface IFacetRange {
    min: string;
    max: string;
    minIncluded: boolean;
    maxIncluded: boolean;
}

export interface IFacetValue {
    label: string;
    count: number;
    selected: boolean;
}

export type IAllFilterRemoveDelegate = () => void;

export type IFilterActionDelegate = (key: string, value: string, action: FilterActionType) => void;

export enum FilterActionType {
    Add = "Add",
    Minus = "Minus",
}
