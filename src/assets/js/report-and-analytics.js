//Subscription analytics
var chart;
var currentYear = new Date().getFullYear();

function generateYearCategories(year) {
    return [
        `${year}-01-01`, `${year}-02-01`, `${year}-03-01`, `${year}-04-01`, 
        `${year}-05-01`, `${year}-06-01`, `${year}-07-01`, `${year}-08-01`, 
        `${year}-09-01`, `${year}-10-01`, `${year}-11-01`, `${year}-12-01`
    ];
}

//Insert the real subscription data here from the database
var dataset = {
    today: {
        categories: ['00:00', '06:00', '12:00', '18:00', '23:59'],
        freeData: [100, 150, 200, 250, 300],
        premiumData: [50, 75, 100, 125, 150],
        enterpriseData: [10, 20, 30, 40, 50]
    },
    week: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        freeData: [500, 600, 750, 800, 820, 900, 1000],
        premiumData: [200, 250, 300, 350, 370, 400, 420],
        enterpriseData: [50, 60, 80, 100, 120, 140, 160]
    },
    month: {
        categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        freeData: [2000, 2200, 2400, 2600],
        premiumData: [800, 850, 900, 950],
        enterpriseData: [200, 220, 240, 260]
    },
    year: {
        categories: generateYearCategories(currentYear),
        freeData: [500, 600, 750, 800, 820, 900, 1000, 1100, 1200, 1300, 1400, 1500],
        premiumData: [200, 250, 300, 350, 370, 400, 420, 450, 470, 500, 530, 550],
        enterpriseData: [50, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260]
    }
};

function updateChart(range) {
    let data = dataset[range];

    if (range === 'year') {
        let newYear = new Date().getFullYear();
        if (newYear !== currentYear) {
            currentYear = newYear;
            dataset.year.categories = generateYearCategories(currentYear);
        }
        data = dataset.year;
    }

    chart.updateOptions({
        xaxis: {
            categories: data.categories
        }
    });

    chart.updateSeries([
        { name: 'Free', data: data.freeData },
        { name: 'Premium', data: data.premiumData },
        { name: 'Enterprise', data: data.enterpriseData }
    ]);

    // Update Subscription Totals
    let freeTotal = data.freeData.reduce((a, b) => a + b, 0);
    let premiumTotal = data.premiumData.reduce((a, b) => a + b, 0);
    let enterpriseTotal = data.enterpriseData.reduce((a, b) => a + b, 0);
    let totalSubscriptions = freeTotal + premiumTotal + enterpriseTotal;

    document.getElementById("total-subscriptions").innerText = totalSubscriptions.toLocaleString();
    document.getElementById("free-subscription").innerText = freeTotal.toLocaleString();;
    document.getElementById("premium-subscription").innerText = premiumTotal.toLocaleString();;
    document.getElementById("enterprise-subscription").innerText = enterpriseTotal.toLocaleString();
}

var options = {
    series: [
        { name: 'Free', data: [] },
        { name: 'Premium', data: [] },
        { name: 'Enterprise', data: [] }
    ],
    chart: {
        type: 'area',
        height: 350,
        stacked: true
    },
    colors: ['#845adf', '#23b7e5', '#246cd9'],
    grid: { borderColor: '#f2f5f7' },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth' },
    fill: {
        type: 'gradient',
        gradient: { opacityFrom: 0.2, opacityTo: 0.6 }
    },
    legend: { position: 'top', horizontalAlign: 'left' },
    xaxis: { type: 'category', categories: [] }
};

chart = new ApexCharts(document.querySelector("#area-stacked"), options);
chart.render();

updateChart('year');

const todayBtn = document.getElementById('todayBtn');
const weekBtn = document.getElementById('weekBtn');
const monthBtn = document.getElementById('monthBtn');
const yearBtn = document.getElementById('yearBtn');
todayBtn.addEventListener("click", ()=>{
    updateChart('today')
});
weekBtn.addEventListener("click", ()=>{
    updateChart('week')
});
monthBtn.addEventListener("click", ()=>{
    updateChart('month')
});
yearBtn.addEventListener("click", ()=>{
    updateChart('year')
});


//Subscription Status analytics
var chart3;
var currentYear3 = new Date().getFullYear();

function generateYearCategories3(year) {
    return [
        `${year}-01-01`, `${year}-02-01`, `${year}-03-01`, `${year}-04-01`, 
        `${year}-05-01`, `${year}-06-01`, `${year}-07-01`, `${year}-08-01`, 
        `${year}-09-01`, `${year}-10-01`, `${year}-11-01`, `${year}-12-01`
    ];
}

//Insert the real subscription status data here from the database
var dataset3 = {
    today: {
        categories: ['00:00', '06:00', '12:00', '18:00', '23:59'],
        successSub: [100, 150, 200, 250, 300],
        declinedSub: [50, 700, 80, 250, 100],
        cancelledSub: [50, 75, 100, 125, 150],
        renewalsSub: [10, 20, 30, 40, 50]
    },
    week: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        successSub: [200, 600, 750, 800, 820, 900, 1000],
        declinedSub: [700, 100, 750, 800, 820, 900, 1000],
        cancelledSub: [500, 250, 300, 350, 370, 400, 420],
        renewalsSub: [60, 60, 80, 100, 120, 140, 160]
    },
    month: {
        categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        successSub: [4000, 2200, 2400, 2600],
        declinedSub: [2000, 2200, 2400, 2600],
        cancelledSub: [800, 850, 900, 950],
        renewalsSub: [200, 220, 240, 260]
    },
    year: {
        categories: generateYearCategories(currentYear),
        successSub: [400, 600, 250, 800, 320, 900, 1000, 1100, 1200, 1300, 1400, 1500],
        declinedSub: [500, 600, 750, 800, 820, 900, 1000, 1100, 1200, 1300, 1400, 1500],
        cancelledSub: [200, 250, 300, 350, 370, 400, 420, 450, 470, 500, 530, 550],
        renewalsSub: [50, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260]
    }
};

function updateChart3(range) {
    let data = dataset3[range];

    if (range === 'year') {
        let newYear = new Date().getFullYear();
        if (newYear !== currentYear) {
            currentYear = newYear;
            dataset3.year.categories = generateYearCategories3(currentYear);
        }
        data = dataset3.year;
    }

    chart3.updateOptions({
        xaxis: {
            categories: data.categories
        }
    });

    chart3.updateSeries([
        { name: 'Successful', data: data.successSub },
        { name: 'Declined', data: data.declinedSub },
        { name: 'Cancelled', data: data.cancelledSub },
        { name: 'Renewals', data: data.renewalsSub }
    ]);

    // Update Subscription Totals
    let successTotal = data.successSub.reduce((a, b) => a + b, 0);
    let declinedTotal = data.declinedSub.reduce((a, b) => a + b, 0);
    let cancelledTotal = data.cancelledSub.reduce((a, b) => a + b, 0);
    let renewalsTotal = data.renewalsSub.reduce((a, b) => a + b, 0);

    document.getElementById("total-subscriptions3").innerText = successTotal.toLocaleString();
    document.getElementById("free-subscription3").innerText = declinedTotal.toLocaleString();;
    document.getElementById("premium-subscription3").innerText = cancelledTotal.toLocaleString();
    document.getElementById("enterprise-subscription3").innerText = renewalsTotal.toLocaleString();
}

var options3 = {
    series: [
        { name: 'Successful', data: [] },
        { name: 'Declined', data: [] },
        { name: 'Cancelled', data: [] },
        { name: 'Renewals', data: [] }
    ],
    chart: {
        type: 'area',
        height: 350,
        stacked: true
    },
    colors: ['#845adf', '#23b7e5', '#A34A88', '#246cd9'],
    grid: { borderColor: '#f2f5f7' },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth' },
    fill: {
        type: 'gradient',
        gradient: { opacityFrom: 0.2, opacityTo: 0.6 }
    },
    legend: { position: 'top', horizontalAlign: 'left' },
    xaxis: { type: 'category', categories: [] }
};

chart3 = new ApexCharts(document.querySelector("#area-stacked3"), options3);
chart3.render();

updateChart3('year');

const todayBtn3 = document.getElementById('todayBtn3');
const weekBtn3 = document.getElementById('weekBtn3');
const monthBtn3 = document.getElementById('monthBtn3');
const yearBtn3 = document.getElementById('yearBtn3');
todayBtn3.addEventListener("click", ()=>{
    updateChart3('today')
});
weekBtn3.addEventListener("click", ()=>{
    updateChart3('week')
});
monthBtn3.addEventListener("click", ()=>{
    updateChart3('month')
});
yearBtn3.addEventListener("click", ()=>{
    updateChart3('year')
});

//Revenue analytics
var chart2;
var currentYear2 = new Date().getFullYear();

function generateYearCategories2(year) {
    return [
        `${year}-01-01`, `${year}-02-01`, `${year}-03-01`, `${year}-04-01`, 
        `${year}-05-01`, `${year}-06-01`, `${year}-07-01`, `${year}-08-01`, 
        `${year}-09-01`, `${year}-10-01`, `${year}-11-01`, `${year}-12-01`
    ];
}

//Insert the real revenue data here from the database
var dataset2 = {
    today: {
        categories: ['00:00', '06:00', '12:00', '18:00', '23:59'],
        premiumData: [50, 75, 100, 125, 150],
        enterpriseData: [10, 20, 30, 40, 50]
    },
    week: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        premiumData: [200, 250, 300, 350, 370, 400, 420],
        enterpriseData: [50, 60, 80, 100, 120, 140, 160]
    },
    month: {
        categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        premiumData: [800, 850, 900, 950],
        enterpriseData: [200, 220, 240, 260]
    },
    year: {
        categories: generateYearCategories(currentYear),
        premiumData: [200, 250, 300, 350, 370, 400, 420, 450, 470, 500, 530, 550],
        enterpriseData: [50, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260]
    }
};

function updateChart2(range) {
    let data = dataset2[range];

    if (range === 'year') {
        let newYear = new Date().getFullYear();
        if (newYear !== currentYear) {
            currentYear = newYear;
            dataset2.year.categories = generateYearCategories(currentYear);
        }
        data = dataset2.year;
    }

    chart2.updateOptions({
        xaxis: {
            categories: data.categories
        }
    });

    chart2.updateSeries([
        { name: 'Premium', data: data.premiumData },
        { name: 'Enterprise', data: data.enterpriseData }
    ]);

    // Update Subscription Totals
    let premiumTotal = data.premiumData.reduce((a, b) => a + b, 0);
    let enterpriseTotal = data.enterpriseData.reduce((a, b) => a + b, 0);
    let totalSubscriptions = premiumTotal + enterpriseTotal;

    document.getElementById("total-subscriptions2").innerText = `$${totalSubscriptions.toLocaleString()}`;
    document.getElementById("premium-subscription2").innerText = `$${premiumTotal.toLocaleString()}`;
    document.getElementById("enterprise-subscription2").innerText = `$${enterpriseTotal.toLocaleString()}`;
}

var options2 = {
    series: [
        { name: 'Premium', data: [] },
        { name: 'Enterprise', data: [] }
    ],
    chart: {
        type: 'area',
        height: 350,
        stacked: true
    },
    colors: ['#845adf', '#23b7e5', '#246cd9'],
    grid: { borderColor: '#f2f5f7' },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth' },
    fill: {
        type: 'gradient',
        gradient: { opacityFrom: 0.2, opacityTo: 0.6 }
    },
    legend: { position: 'top', horizontalAlign: 'left' },
    xaxis: { type: 'category', categories: [] }
};

chart2 = new ApexCharts(document.querySelector("#area-stacked2"), options2);
chart2.render();

updateChart2('year');

const todayBtn2 = document.getElementById('todayBtn2');
const weekBtn2 = document.getElementById('weekBtn2');
const monthBtn2 = document.getElementById('monthBtn2');
const yearBtn2 = document.getElementById('yearBtn2');
todayBtn2.addEventListener("click", ()=>{
    updateChart2('today')
});
weekBtn2.addEventListener("click", ()=>{
    updateChart2('week')
});
monthBtn2.addEventListener("click", ()=>{
    updateChart2('month')
});
yearBtn2.addEventListener("click", ()=>{
    updateChart2('year')
});


//Projects analytics
var chart4;
var currentYear4 = new Date().getFullYear();

function generateYearCategories4(year) {
    return [
        `${year}-01-01`, `${year}-02-01`, `${year}-03-01`, `${year}-04-01`, 
        `${year}-05-01`, `${year}-06-01`, `${year}-07-01`, `${year}-08-01`, 
        `${year}-09-01`, `${year}-10-01`, `${year}-11-01`, `${year}-12-01`
    ];
}

//Insert the real projects data here from the database
var dataset4 = {
    today: {
        categories: ['00:00', '06:00', '12:00', '18:00', '23:59'],
        completedData: [50, 75, 100, 125, 150],
        ongoingData: [10, 20, 30, 40, 50]
    },
    week: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        completedData: [200, 250, 300, 350, 370, 400, 420],
        ongoingData: [50, 60, 80, 100, 120, 140, 160]
    },
    month: {
        categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        completedData: [800, 850, 900, 950],
        ongoingData: [200, 220, 240, 260]
    },
    year: {
        categories: generateYearCategories4(currentYear),
        completedData: [200, 250, 300, 350, 370, 400, 420, 450, 470, 500, 530, 550],
        ongoingData: [50, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260]
    }
};

function updateChart4(range) {
    let data = dataset4[range];

    if (range === 'year') {
        let newYear = new Date().getFullYear();
        if (newYear !== currentYear) {
            currentYear = newYear;
            dataset4.year.categories = generateYearCategories4(currentYear);
        }
        data = dataset4.year;
    }

    chart4.updateOptions({
        xaxis: {
            categories: data.categories
        }
    });

    chart4.updateSeries([
        { name: 'Completed', data: data.completedData },
        { name: 'Ongoing', data: data.ongoingData }
    ]);

    // Update Subscription Totals
    let completedTotal = data.completedData.reduce((a, b) => a + b, 0);
    let ongoingTotal = data.ongoingData.reduce((a, b) => a + b, 0);
    let totalProjects = completedTotal + ongoingTotal;

    document.getElementById("total-subscriptions4").innerText = totalProjects.toLocaleString();
    document.getElementById("premium-subscription4").innerText = completedTotal.toLocaleString();
    document.getElementById("enterprise-subscription4").innerText = ongoingTotal.toLocaleString();
}

var options4 = {
    series: [
        { name: 'Ongoing', data: [] },
        { name: 'Completed', data: [] }
    ],
    chart: {
        type: 'area',
        height: 350,
        stacked: true
    },
    colors: ['#845adf', '#23b7e5', '#246cd9'],
    grid: { borderColor: '#f2f5f7' },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth' },
    fill: {
        type: 'gradient',
        gradient: { opacityFrom: 0.2, opacityTo: 0.6 }
    },
    legend: { position: 'top', horizontalAlign: 'left' },
    xaxis: { type: 'category', categories: [] }
};

chart4 = new ApexCharts(document.querySelector("#area-stacked4"), options4);
chart4.render();

updateChart4('year');

const todayBtn4 = document.getElementById('todayBtn4');
const weekBtn4 = document.getElementById('weekBtn4');
const monthBtn4 = document.getElementById('monthBtn4');
const yearBtn4 = document.getElementById('yearBtn4');
todayBtn4.addEventListener("click", ()=>{
    updateChart4('today')
});
weekBtn4.addEventListener("click", ()=>{
    updateChart4('week')
});
monthBtn4.addEventListener("click", ()=>{
    updateChart4('month')
});
yearBtn4.addEventListener("click", ()=>{
    updateChart4('year')
});


//Users analytics
var chart5;
var currentYear5 = new Date().getFullYear();

function generateYearCategories5(year) {
    return [
        `${year}-01-01`, `${year}-02-01`, `${year}-03-01`, `${year}-04-01`, 
        `${year}-05-01`, `${year}-06-01`, `${year}-07-01`, `${year}-08-01`, 
        `${year}-09-01`, `${year}-10-01`, `${year}-11-01`, `${year}-12-01`
    ];
}

//Insert the real revenue data here from the database
var dataset5 = {
    today: {
        categories: ['00:00', '06:00', '12:00', '18:00', '23:59'],
        activeData: [50, 75, 100, 125, 150],
        inactiveData: [10, 20, 30, 40, 50]
    },
    week: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        activeData: [200, 250, 300, 350, 370, 400, 420],
        inactiveData: [50, 60, 80, 100, 120, 140, 160]
    },
    month: {
        categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        activeData: [800, 850, 900, 950],
        inactiveData: [200, 220, 240, 260]
    },
    year: {
        categories: generateYearCategories5(currentYear),
        activeData: [200, 250, 300, 350, 370, 400, 420, 450, 470, 500, 530, 550],
        inactiveData: [50, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260]
    }
};

function updateChart5(range) {
    let data = dataset5[range];

    if (range === 'year') {
        let newYear = new Date().getFullYear();
        if (newYear !== currentYear) {
            currentYear = newYear;
            dataset5.year.categories = generateYearCategories5(currentYear);
        }
        data = dataset5.year;
    }

    chart5.updateOptions({
        xaxis: {
            categories: data.categories
        }
    });

    chart5.updateSeries([
        { name: 'Active', data: data.activeData },
        { name: 'Inactive', data: data.inactiveData }
    ]);

    // Update Users Totals
    let activeTotal = data.activeData.reduce((a, b) => a + b, 0);
    let inactiveTotal = data.inactiveData.reduce((a, b) => a + b, 0);
    let totalUsers = activeTotal + inactiveTotal;

    document.getElementById("total-subscriptions5").innerText = totalUsers.toLocaleString();
    document.getElementById("premium-subscription5").innerText = activeTotal.toLocaleString();
    document.getElementById("enterprise-subscription5").innerText = inactiveTotal.toLocaleString();
}

var options5 = {
    series: [
        { name: 'Active', data: [] },
        { name: 'Inactive', data: [] }
    ],
    chart: {
        type: 'area',
        height: 350,
        stacked: true
    },
    colors: ['#845adf', '#23b7e5', '#246cd9'],
    grid: { borderColor: '#f2f5f7' },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth' },
    fill: {
        type: 'gradient',
        gradient: { opacityFrom: 0.2, opacityTo: 0.6 }
    },
    legend: { position: 'top', horizontalAlign: 'left' },
    xaxis: { type: 'category', categories: [] }
};

chart5 = new ApexCharts(document.querySelector("#area-stacked5"), options4);
chart5.render();

updateChart5('year');

const todayBtn5 = document.getElementById('todayBtn5');
const weekBtn5 = document.getElementById('weekBtn5');
const monthBtn5 = document.getElementById('monthBtn5');
const yearBtn5 = document.getElementById('yearBtn5');
todayBtn5.addEventListener("click", ()=>{
    updateChart5('today')
});
weekBtn5.addEventListener("click", ()=>{
    updateChart5('week')
});
monthBtn5.addEventListener("click", ()=>{
    updateChart5('month')
});
yearBtn5.addEventListener("click", ()=>{
    updateChart5('year')
});



