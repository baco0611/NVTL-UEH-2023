import clsx from 'clsx'
import member1 from './img/Member1.png'
import member2 from './img/Member2.png'
import member3 from './img/Member3.png'

function ClientProudMateInfo({ proudMateInfo, setIndex }) {

    return (
        <div className='client-proud-2-content'>
            <form id='client-proud-2-form' className='client-proud-2-input'>
                <div className="proud-input-box">
                    <img src={member1}/>
                    <input
                        className={clsx({filled: proudMateInfo.memberName1})}
                        value={proudMateInfo.memberName1}
                        readOnly
                    />
                    <input
                        className={clsx({filled: proudMateInfo.memberStudentCode1})}
                        value={proudMateInfo.memberStudentCode1}
                        readOnly
                    />
                </div>
                <div className="proud-input-box">
                    <img src={member2}/>
                    <input
                        className={clsx({filled: proudMateInfo.memberName2})}
                        value={proudMateInfo.memberName2}
                        readOnly
                    />
                    <input
                        className={clsx({filled: proudMateInfo.memberStudentCode2})}
                        value={proudMateInfo.memberStudentCode2}
                        readOnly
                    />
                </div>
                <div className="proud-input-box">
                    <img src={member3}/>
                    <input
                        className={clsx({filled: proudMateInfo.memberName3})}
                        value={proudMateInfo.memberName3}
                        readOnly
                    />
                    <input
                        className={clsx({filled: proudMateInfo.memberStudentCode3})}
                        value={proudMateInfo.memberStudentCode3}
                        readOnly
                    />
                </div>
            </form>

            <div className='client-proud-2-btn'>
                <button className='secondary-button' onClick={() => {setIndex(1)}}>Quay lại</button>
                <button className='secondary-button' onClick={() => {setIndex(3)}}>Tiếp theo</button>
            </div>
        </div>
    )
}

export default ClientProudMateInfo