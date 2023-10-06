import './styles.css';

const Carrossel3D = () => {

    return (
        <div className='box'>
            <div className='carousel'>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                    <div key={index} className={`image`} style={{ '--i': index }}>
                        <img src={require(`../../../../assets/${index}.png`)} alt='' />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carrossel3D;
