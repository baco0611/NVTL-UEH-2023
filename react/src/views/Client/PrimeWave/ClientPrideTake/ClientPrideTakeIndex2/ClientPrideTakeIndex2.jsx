import { useRef, useState } from 'react'
import './ClientPrideTakeIndex2.scss'
import title from './img/title.png'
import clsx from 'clsx'
import left from './img/left.png'
import right from './img/right.png'
import up from './img/up.png'
import down from './img/down.png'
import moveStar from './img/moveStar.png'
import frame from './img/frame.png'
import rotate from './img/rotate.png'
import zoom from './img/zoom.png'
import domtoimage, { htmlToImage } from 'dom-to-image'

function ClientPrideTakeIndex2({ avatar, setResult, setIndex }) {
    
    const imageURL = avatar || 'https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/12/1228045/Lisa-Blackpink6.jpeg'
    const [ name, setName ] = useState('')
    const [ value, setValue ] = useState({
        down: 0,
        right: 0,
        scale: 1,
        rotate: 0,
    })
    const avataRef = useRef(null)
    const testRef = useRef(null)

    const handleChangValue = e => {
        const value = e.target.value
        
        if(value.length <= 15)
            setName(value)
    }

    const movePic = (tag) => {
        switch (tag) {
            case 'left':
                setValue({
                    ...value, 
                    right: value.right - 10
                })
                break;
            case 'right':
                setValue({
                    ...value, 
                    right: value.right + 10
                })
                break;
            case 'down':
                setValue({
                    ...value, 
                    down: value.down + 10
                })
                break;
            case 'up':
                setValue({
                    ...value, 
                    down: value.down - 10
                })
                break;
        
            default:
                break;
        }
    }

    const rotatePic = () => {
        setValue({
            ...value,
            rotate: value.rotate + 90
        })
    }

    const zoomIn = () => {
        setValue({
            ...value,
            scale: value.scale + 0.1
        })
    }

    const zoomOut = () => {
        setValue({
            ...value,
            scale: value.scale - 0.1
        })
    }

    const handleNext = async () => {
        domtoimage.toPng(avataRef.current)
        .then(dataURL => {
            console.log(dataURL)
            setResult(dataURL)
            setIndex(3)
        })
    }

    return (
        <div id='client-pride-2'>
            <div className='client-pride-2'>
                <div className='client-pride-2-left' ref={avataRef}>
                    <div className='client-pride-2-left-box'>
                        <img className='frame' src={frame}/>
                        <img 
                            className='avatar' 
                            src={imageURL}
                            style={{
                                transform: `translateY(${value.down}px) translateX(${value.right}px) scale(${value.scale}) rotate(${value.rotate}deg)`
                            }}    
                        />
                        <h1 ref={testRef}>{name || 'Họ và Tên'}</h1>
                        <h2>{name || 'Họ và Tên'}</h2>
                    </div>
                </div>
                <div className='client-pride-2-right'>
                    <img className='client-pride-2-title' src={title}/>
                    <input 
                        className={clsx('client-pride-2-input', {
                            'filled': name
                        })}
                        type='text'
                        placeholder='Tên của bạn (15 ký tự)'
                        value={name}
                        onChange={handleChangValue}    
                    />
                    <div className='client-pride-2-control'>
                        <div className='control-box'>
                            <div className='item'>
                                <img 
                                    className='move-star' 
                                    src={moveStar}
                                />
                                <img 
                                    className='move-left' 
                                    src={left}
                                    onClick={() => movePic('left')}
                                />
                                <img 
                                    className='move-right' 
                                    src={right}
                                    onClick={() => movePic('right')}
                                />
                                <img 
                                    className='move-up' 
                                    src={up}
                                    onClick={() => movePic('up')}
                                />
                                <img 
                                    className='move-down'
                                    src={down}
                                    onClick={() => movePic('down')}
                                />
                            </div>
                            <p>Di chuyển</p>
                        </div>
                        <div className='control-box'>
                            <div className='item'>
                                <img 
                                    src={rotate} 
                                    className='cursorPointer icon'
                                    onClick={rotatePic}
                                />
                            </div>
                            <p>Xoay ảnh</p>
                        </div>
                        <div className='control-box'>
                            <div className='item'>
                                <img 
                                    src={zoom} 
                                    className='cursorPointer icon'
                                    onClick={zoomIn}
                                />
                            </div>
                            <p>Phóng to</p>
                        </div>
                        <div className='control-box'>
                            <div className='item'>
                                <img 
                                    src={zoom} 
                                    className='cursorPointer icon'
                                    onClick={zoomOut}
                                    style={{
                                        transform: 'scale(0.5)'
                                    }}
                                />
                            </div>
                            <p>Thu nhỏ</p>
                        </div>
                    </div>
                    <div className='client-pride-2-nav'>
                        <button className="secondary-button btn" onClick={() => setIndex(1)}>
                            <i className="fa-solid fa-arrow-left-long"></i>
                            Quay lại
                        </button> 
                        <button className="secondary-button btn" onClick={handleNext}>
                            Tiếp tục
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </button> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientPrideTakeIndex2