import React, { useEffect, useState } from 'react'
import Flip from './Flip'
import timedots from './img/timedots.png'

function NightCountdown() {
    const deadline = new Date('October 1, 2023 18:00:00')
    const date = new Date()
    const t2 = deadline.getTime();
    const t1 = date.getTime();

    let DAY = 0
    let HOUR = 0
    let MINUTE = 0
    let SECOND = 0

    if(
        t2>=t1
    ) { 
        DAY = parseInt((t2-t1)/(24*3600*1000));
        HOUR = deadline.getHours() - date.getHours()
        MINUTE = deadline.getMinutes() - date.getMinutes()
        SECOND = deadline.getSeconds() - date.getSeconds()
    } else {
        DAY = 0
        HOUR = 0
        MINUTE = 0
        SECOND = 0
    }


    DAY = DAY.toString()
    if(DAY.length == 1) DAY = '0' + DAY
    HOUR = HOUR.toString()
    if(HOUR.length == 1) HOUR = '0' + HOUR
    MINUTE = MINUTE.toString()
    if(MINUTE.length == 1) MINUTE = '0' + MINUTE
    SECOND = SECOND.toString()
    if(SECOND.length == 1) SECOND = '0' + SECOND

    const [ time, setTime ] = useState({
        day: DAY,
        hour: HOUR,
        minute: MINUTE,
        second: SECOND
    })

    useEffect(() => {
        const countDown = setInterval(() => {
        setTime(prev => {
            let { day, hour, minute, second } = prev
            day = Number.parseInt(day)
            hour = Number.parseInt(hour)
            minute = Number.parseInt(minute)
            second = Number.parseInt(second)
            
            if(!(day == 0  && hour == 0 && minute == 0 && second == 0))
            {
                second -= 1
                if(second < 0) {
                    minute -= 1
                    second = 59
                }
    
                if(minute < 0) {
                    minute = 59
                    hour -= 1
                }
    
                if(hour < 0) {
                    day -= 1
                    hour = 23
                }

                if(day < 0) day = 0
                day = day.toString()
                if(day.length == 1) day = '0' + day
                hour = hour.toString()
                if(hour.length == 1) hour = '0' + hour
                minute = minute.toString()
                if(minute.length == 1) minute = '0' + minute
                second = second.toString()
                if(second.length == 1) second = '0' + second
                return {
                    day,
                    hour,
                    minute,
                    second
                }
            }
            return {
                day: "00",
                hour: "00",
                minute: "00",
                second: "00",
            }
        })
        }, 1000)

        return () => clearInterval(countDown)
    }, [])

    return (
        <div className='trao-recruit-clock-main nightfest'>
            <div className='trao-recruit-clock-item'>
                <Flip value={time.day}/>
                <p>NGÀY</p>
            </div>
            <img className='time-dots' src={timedots}/>
            <div className='trao-recruit-clock-item'>
                <Flip value={time.hour}/>
                <p>GIỜ</p>
            </div>
            <img className='time-dots' src={timedots}/>
            <div className='trao-recruit-clock-item'>
                <Flip value={time.minute}/>
                <p>PHÚT</p>
            </div>
            <img className='time-dots' src={timedots}/>
            <div className='trao-recruit-clock-item'>
                <Flip value={time.second}/>
                <p>GIÂY</p>
            </div>
        </div>
    )
}

export default NightCountdown