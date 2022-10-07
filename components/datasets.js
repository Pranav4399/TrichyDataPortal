import styles from '../styles/datasets.module.css'

const Datasets = () => {
  return (
    <div className={styles.datasets}>
      <h4 style={{"textDecoration":"underline"}}>Datasets</h4>
      <div className={styles.dataTable}>
        <div className="row">
          <div className="column">Name</div>
          <div className="column">date</div>
          <div className="column">description</div>
          <div className="column"><a href='#'>download</a></div>
          <div className="column"><a href='#'>view of map</a></div>
        </div>
      </div>
    </div>
  );
};

export default Datasets;