import millisecondsToSeconds from 'date-fns/millisecondsToSeconds'
import millisecondsToMinutes from 'date-fns/millisecondsToMinutes'
import millisecondsToHours from 'date-fns/millisecondsToHours'


const timeToString = (timer) => {

    const seconds = millisecondsToSeconds(timer)
    const minutes = millisecondsToMinutes(timer)
    const hours = millisecondsToHours(timer)
    return `${hours>0?hours+' h:':''} ${minutes>0?minutes%60+' m:':''} ${seconds>0?seconds%60+'s: ':''} ${timer.toString().slice(-3,-1)+'ms'}`
    }

    
export default timeToString