import styles from "../styles/Gallery.module.css";

const detail = () => {
  return (
    <section className={styles.detail}>
      <div className={styles.contentcard}>
        <h1> Detail Page </h1>
        <img src="https://i0.wp.com/lh4.ggpht.com/_-rpMcGsgiFQ/SgG2Frp0d5I/AAAAAAAADMw/qSGvxSh-Z9M/s512/DSC_0036.JPG" />
        <div className={styles.content}>
          <div className={styles.love}>
            <h2 className={styles.name}>Cascadilla Gorge</h2>
            <button>Love</button>
          </div>
          <p className={styles.author}>
            by <strong>Urchin</strong>
          </p>
          <p className={styles.date}>Nov 13th</p>
          <p className={styles.para}>
            Bacon ipsum dolor amet short ribs brisket venison rump drumstick pig
            sausage prosciutto chicken spare ribs salami picanha doner. Kevin
            capicola sausage, buffalo bresaola venison turkey shoulder picanha
            ham pork tri-tip meatball meatloaf ribeye. Doner spare ribs
            andouille bacon sausage. Ground round jerky brisket pastrami shank.
            Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin.
            Halvah croissant candy canes bonbon candy. Apple pie jelly beans
            topping carrot cake danish tart cake cheesecake. Muffin danish
            chocolate soufflé pastry icing bonbon oat cake. Powder cake jujubes
            oat cake. Lemon drops tootsie roll marshmallow halvah carrot cake.
            Cheesy feet airedale smelly cheese. Cow swiss cheese and wine
            cheddar red leicester airedale croque monsieur fromage. Paneer
            cheesy feet dolcelatte blue castello squirty cheese goat cheese
            strings pecorino. Roquefort croque monsieur cheesy grin fromage
            frais cheese on toast danish fontina. Cheese strings jarlsberg
            cheese on toast. Cheese triangles halloumi camembert de normandie
            pecorino jarlsberg port-salut red leicester cheese strings. Croque
            monsieur bocconcini cauliflower cheese croque monsieur mascarpone
            queso melted cheese cottage cheese. Everyone loves bavarian bergkase
            edam ricotta feta bavarian bergkase cheesy grin port-salut. Red
            leicester pepper jack jarlsberg. Edam chalk and cheese monterey
            jack. Cheese slices edam jarlsberg cheeseburger cheesy grin croque
            monsieur caerphilly jarlsberg. Fromage frais gouda monterey jack
            airedale rubber cheese chalk and cheese cheesecake halloumi. Smelly
            cheese cheese triangles port-salut.
          </p>
        </div>
      </div>
    </section>
  );
};

export default detail;
