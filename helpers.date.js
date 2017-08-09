class HelpersDate {
    getNextMonth = (monthAfter,startMonthAfter="dec 01, 2017",lang='tr-TR') => {
        let monthList = [];
        let date = new Date(startMonthAfter);
        for (let i = 0; i < monthAfter; i++) {
            date.setMonth(date.getMonth() + 1);
            let val = date.toLocaleString(lang, {
                month: 'long',
            });
            monthList.push({val: val, text: val});
        }
        return monthList;
    };

    getBetweenYears = (startYear, endYear) => {
        let yearSelectBoxObj = [];
        for (let i = startYear; i <= endYear; i++) {
            yearSelectBoxObj.push({val: i, text: i});
        }
        return yearSelectBoxObj;
    }
}

export default HelpersDate;
