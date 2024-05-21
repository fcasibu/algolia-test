"use client";

import algoliasearch from "algoliasearch/lite";
import { Hit as AlgoliaHit } from "instantsearch.js";
import React from "react";
import {
  Hits,
  Highlight,
  SearchBox,
  RefinementList,
  Configure,
  Pagination,
} from "react-instantsearch";
import { InstantSearchNext } from "react-instantsearch-nextjs";

function Panel({
  children,
  header,
  footer,
}: {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div className="ais-Panel">
      {header && <div className="ais-Panel-header">{header}</div>}
      <div className="ais-Panel-body">{children}</div>
      {footer && <div className="ais-Panel-footer">{footer}</div>}
    </div>
  );
}

type HitProps = {
  hit: AlgoliaHit<{
    name: string;
    price: number;
  }>;
};

function Hit({ hit }: HitProps) {
  return (
    <>
      <Highlight hit={hit} attribute="name" className="Hit-label" />
      <span className="Hit-price">${hit.price}</span>
    </>
  );
}

const client = algoliasearch("latency", "6be0576ff61c053d5f9a3225e2a90f76");

export default function Search() {
  return (
    <InstantSearchNext searchClient={client} indexName="instant_search">
      <Configure hitsPerPage={12} />
      <main className="Container">
        <div>
          <Panel header="Brands">
            <RefinementList attribute="brand" showMore />
          </Panel>
        </div>
        <div>
          <SearchBox />
          <Hits hitComponent={Hit} />
          <Pagination />
        </div>
      </main>
    </InstantSearchNext>
  );
}
