const targetDate = new Date('2025-01-01T00:00:00');

function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate

    const days = Math.floor(timeDifference/(1000*60*60*24));

    const hours = Math.floor((timeDifference % (1000*60*60*24)) /(1000*60*60))

    const minutes = Math.floor((timeDifference % (1000*60*60)) / (1000*60))

    const seconds = Math.floor((timeDifference%(1000*60)) / 1000)

    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`

    // window.location.reload(true) //this code will reload window in given interval of time in settimeout function
}

setTimeout(updateCountdown, 1000)
updateCountdown();