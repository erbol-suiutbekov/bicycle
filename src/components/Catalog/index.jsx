import React from "react";
import "./style.css";
import CatalogComponent from "./CatalogComponent";
function Catalog() {
  return (
    <div>
      <div className="container">
        <div className="catalog">
          <div className="catalog_owerflow">
            <h1 className="catalog_h1">Catalog</h1>
            <a className="">
              <CatalogComponent catalog={"украшение"} />
            </a>
            <a className="">
              <CatalogComponent catalog={"одежда"} />
            </a>
            <a className="">
              <CatalogComponent catalog={"обувь"} />
            </a>
            <a className="">
              <CatalogComponent catalog={"дом и сад"} />
            </a>
            <a className="">
              <CatalogComponent catalog={"детские товары"} />
            </a>
            <a className="">
              <CatalogComponent catalog={"красота и здоровье"} />
            </a>
            <a className="">
              <CatalogComponent catalog={"бытовая техника"} />
            </a>
            <a className="">
              <CatalogComponent catalog={"спорт и отдых"} />
            </a>
            <a className="">
              <CatalogComponent catalog={"строительство и ремонт"} />
            </a>
            <a className="">
              <CatalogComponent catalog={"продукты питания"} />
            </a>
            <a className="">
              <CatalogComponent catalog={"аптека"} />
            </a>
            <a className="">
              <CatalogComponent catalog={"книги"} />
            </a>
            <a className="">
              <CatalogComponent catalog={"мебель"} />
            </a>
            <a className="">
              <CatalogComponent catalog={"аксессуары"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
