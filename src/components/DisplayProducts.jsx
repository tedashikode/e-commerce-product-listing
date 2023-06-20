//displaying a specified number of products per page - pagination
import Card from './Card'

const DisplayProducts = ({ products, pagesVisited,  productsPerPage }) => {
    console.log("The display product is being rendered");
    console.log("These are the products being used in the display products component: ", products);
  
    return(
      products
        .slice(pagesVisited, pagesVisited + productsPerPage)
        .map((product, i) => {
        return (
          <Card 
            key={i}
            name={product?.title} 
            price={`$${product?.price}`} 
            img={product?.image} 
            description={`${product?.title} image`}
          />
        )})                  
    )
}

export default DisplayProducts