import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  { id: "p1", price: 6, title: "A Book", description: "The first book" },
  { id: "p2", price: 5, title: "Second Book", description: "The second book" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => (
          <ProductItem
            key={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            id={item.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
