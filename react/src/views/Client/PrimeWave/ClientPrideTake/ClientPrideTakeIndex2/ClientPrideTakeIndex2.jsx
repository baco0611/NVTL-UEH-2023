import { useEffect, useRef, useState } from 'react'
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
import domtoimage from 'dom-to-image'
import * as alphabet from './img/alphabet'
import html2canvas from 'html2canvas'

function ClientPrideTakeIndex2({ avatar, setResult, setIndex, value, setValue, name, setName }) {
    
    const avataRef = useRef(null)

    const handleChangValue = e => {
        const value = e.target.value

        if(value.length <= 15)
            setName(value.toUpperCase())
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
            setResult(dataURL)
            setIndex(3)
        })
    }

    const handleNextStep = async () => {
        const canvas = await html2canvas(avataRef.current)
        const image = canvas.toDataURL("image/png", 1.0)
        setResult(image)
        setIndex(3)
    }

    const handleBack = () => {
        setIndex(1)
        setName('')
        setValue({
            down: 0,
            right: 0,
            scale: 1,
            rotate: 0,
        })
    }

    useEffect(() => {
        if(!avatar) {
            setIndex(1)
        }
    }, [])

    return (
        <div id='client-pride-2'>
            <div className='client-pride-2'>
                <div id='avatar' className='client-pride-2-left' ref={avataRef}>
                    <div className='client-pride-2-left-box'>
                        <img className='frame' src={frame}/>
                        <img 
                            className='avatar' 
                            src={avatar}
                            style={{
                                transform: `translateY(${value.down}px) translateX(${value.right}px) scale(${value.scale}) rotate(${value.rotate}deg)`
                            }}    
                        />
                        {
                            name 
                            &&
                            <div className='client-pride-2-name'>
                            {
                                name.split('').map((item, index) => {
                                    if(item != ' ') {
                                        switch(item) {
                                            case 'Á':
                                                return <img className='key-mu' key={index} src={alphabet.AS}/>
                                            case 'À':
                                                return <img className='key-mu' key={index} src={alphabet.AF}/>
                                            case 'Ã':
                                                return <img className='key-mu' key={index} src={alphabet.AX}/>
                                            case 'Ả':
                                                return <img className='key-mu' key={index} src={alphabet.AR}/>
                                            case 'Ạ':
                                                return <img className='key-nang' key={index} src={alphabet.AJ}/>
                                            case 'Ã':
                                                return <img className='key-mu' key={index} src={alphabet.AX}/>
                                            case 'Ă':
                                                return <img className='key-mu' key={index} src={alphabet.AW}/>
                                            case 'Ắ':
                                                return <img className='key-dau-mu' key={index} src={alphabet.AWS}/>
                                            case 'Ằ':
                                                return <img className='key-dau-mu' key={index} src={alphabet.AWF}/>
                                            case 'Ẳ':
                                                return <img className='key-dau-mu' key={index} src={alphabet.AWR}/>
                                            case 'Ẵ':
                                                return <img className='key-dau-mu' key={index} src={alphabet.AWX}/>
                                            case 'Ặ':
                                                return <img className='key-dau-nang' key={index} src={alphabet.AWJ}/>
                                            case 'Â':
                                                return <img className='key-mu' key={index} src={alphabet.AA}/>
                                            case 'Ấ':
                                                return <img className='key-dau-mu' key={index} src={alphabet.AAS}/>
                                            case 'Ầ':
                                                return <img className='key-dau-mu' key={index} src={alphabet.AAF}/>
                                            case 'Ẩ':
                                                return <img className='key-dau-mu' key={index} src={alphabet.AAR}/>
                                            case 'Ẫ':
                                                return <img className='key-dau-mu' key={index} src={alphabet.AAX}/>
                                            case 'Ậ':
                                                return <img className='key-dau-nang' key={index} src={alphabet.AAJ}/>
                                            case 'É':
                                                return <img className='key-mu' key={index} src={alphabet.ES}/>
                                            case 'È':
                                                return <img className='key-mu' key={index} src={alphabet.EF}/>
                                            case 'Ẻ':
                                                return <img className='key-mu' key={index} src={alphabet.ER}/>
                                            case 'Ẹ':
                                                return <img className='key-nang' key={index} src={alphabet.EJ}/>
                                            case 'Ẽ':
                                                return <img className='key-mu' key={index} src={alphabet.EX}/>
                                            case 'Ê':
                                                return <img className='key-mu' key={index} src={alphabet.EE}/>
                                            case 'Ế':
                                                return <img className='key-dau-mu' key={index} src={alphabet.EES}/>
                                            case 'Ề':
                                                return <img className='key-dau-mu' key={index} src={alphabet.EEF}/>
                                            case 'Ễ':
                                                return <img className='key-dau-mu' key={index} src={alphabet.EEX}/>
                                            case 'Ể':
                                                return <img className='key-dau-mu' key={index} src={alphabet.EER}/>
                                            case 'Ệ':
                                                return <img className='key-dau-nang' key={index} src={alphabet.EEJ}/>
                                            case 'Í':
                                                return <img className='key-mu' key={index} src={alphabet.IS}/>
                                            case 'Ì':
                                                return <img className='key-mu' key={index} src={alphabet.IF}/>
                                            case 'Ĩ':
                                                return <img className='key-mu' key={index} src={alphabet.IX}/>
                                            case 'Ỉ':
                                                return <img className='key-mu' key={index} src={alphabet.IR}/>
                                            case 'Ị':
                                                return <img className='key-nang' key={index} src={alphabet.IJ}/>
                                            case 'Ó':
                                                return <img className='key-mu' key={index} src={alphabet.OS}/>
                                            case 'Ò':
                                                return <img className='key-mu' key={index} src={alphabet.OF}/>
                                            case 'Õ':
                                                return <img className='key-mu' key={index} src={alphabet.OX}/>
                                            case 'Ỏ':
                                                return <img className='key-mu' key={index} src={alphabet.OR}/>
                                            case 'Ọ':
                                                return <img className='key-nang' key={index} src={alphabet.OJ}/>
                                            case 'Ô':
                                                return <img className='key-mu' key={index} src={alphabet.OO}/>
                                            case 'Ố':
                                                return <img className='key-dau-mu' key={index} src={alphabet.OOS}/>
                                            case 'Ồ':
                                                return <img className='key-dau-mu' key={index} src={alphabet.OOF}/>
                                            case 'Ỗ':
                                                return <img className='key-dau-mu' key={index} src={alphabet.OOX}/>
                                            case 'Ổ':
                                                return <img className='key-dau-mu' key={index} src={alphabet.OOR}/>
                                            case 'Ộ':
                                                return <img className='key-dau-nang' key={index} src={alphabet.OOJ}/>
                                            case 'Ơ':
                                                return <img className='key-mu-o' key={index} src={alphabet.OW}/>
                                            case 'Ớ':
                                                return <img className='key-dau-mu-o' key={index} src={alphabet.OWS}/>
                                            case 'Ờ':
                                                return <img className='key-dau-mu-o' key={index} src={alphabet.OWF}/>
                                            case 'Ỡ':
                                                return <img className='key-dau-mu-o' key={index} src={alphabet.OWX}/>
                                            case 'Ở':
                                                return <img className='key-dau-mu-o' key={index} src={alphabet.OWR}/>
                                            case 'Ợ':
                                                return <img className='key-dau-nang-o' key={index} src={alphabet.OWJ}/>
                                            case 'Ú':
                                                return <img className='key-mu' key={index} src={alphabet.US}/>    
                                            case 'Ù':
                                                return <img className='key-mu' key={index} src={alphabet.UF}/>    
                                            case 'Ũ':
                                                return <img className='key-mu' key={index} src={alphabet.UX}/>    
                                            case 'Ủ':
                                                return <img className='key-mu' key={index} src={alphabet.UR}/>    
                                            case 'Ụ':
                                                return <img className='key-nang' key={index} src={alphabet.UJ}/>    
                                            case 'Ư':
                                                return <img className='key-mu-o' key={index} src={alphabet.UW}/>    
                                            case 'Ứ':
                                                return <img className='key-dau-mu-o' key={index} src={alphabet.UWS}/>    
                                            case 'Ừ':
                                                return <img className='key-dau-mu-o' key={index} src={alphabet.UWF}/>    
                                            case 'Ữ':
                                                return <img className='key-dau-mu-o' key={index} src={alphabet.UWX}/>    
                                            case 'Ử':
                                                return <img className='key-dau-mu-o' key={index} src={alphabet.UWR}/>    
                                            case 'Ự':
                                                return <img className='key-dau-nang-o' key={index} src={alphabet.UWJ}/>    
                                            case 'Ý':
                                                return <img className='key-mu' key={index} src={alphabet.YS}/>    
                                            case 'Ỳ':
                                                return <img className='key-mu' key={index} src={alphabet.YF}/>    
                                            case 'Ỹ':
                                                return <img className='key-mu' key={index} src={alphabet.YX}/>    
                                            case 'Ỷ':
                                                return <img className='key-mu' key={index} src={alphabet.YR}/>    
                                            case 'Ỵ':
                                                return <img className='key-nang' key={index} src={alphabet.YJ}/>    
                                            default:
                                                return <img key={index} src={alphabet[item]}/>
                                        }
                                    }
                                        return <div key={index} className='space'></div>
                                })
                            }
                            </div>
                            ||
                            <div className='client-pride-2-name'>
                                <img src={alphabet.N}/>
                                <img src={alphabet.A}/>
                                <img src={alphabet.M}/>
                                <img src={alphabet.E}/>
                            </div>

                        }
                    </div>
                </div>
                <div className='client-pride-2-right'>
                    <img className='client-pride-2-title' src={title}/>
                    <input 
                        className={clsx('client-pride-2-input', {
                            'filled': name
                        })}
                        type='text'
                        placeholder='Tên của bạn (15 ký tự alphabet)'
                        value={name}
                        onChange={handleChangValue}    
                        // onKeyUp={e => console.log(e.key)}
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
                        <button className="secondary-button btn" onClick={handleBack}>
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