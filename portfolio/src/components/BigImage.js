
const BigImage = ({StockImages}) => {

    return (
            <div>
                <img src = {StockImages.image} alt="stock" style = {{width: '90vw', height: '85vh', borderRadius: 6, boxShadow: '4px 3px 2px rgb(13, 13, 13)'}}/>
            </div>
    )
}

export default BigImage;