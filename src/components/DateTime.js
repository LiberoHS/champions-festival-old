import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

mobiscroll.settings = {
    theme: 'ios'
};

class App extends React.Component {
    render() {
        let fromMonday = [];
        let fromSaturday = [];
        let twoWeeks = [];

        for (let i = 0; i < 7; i++) {
            fromMonday.push(new Date(2018, 0, 8 + i));
            fromSaturday.push(new Date(2018, 0, 6 + i));
        }

        for (let j = 0; j < 14; j++) {
            twoWeeks.push(new Date(2018, 0, 8 + j));
        }
        return (
            <mobiscroll.Form>
                <div className="mbsc-grid">
                    <div className="mbsc-row">
                        <div className="mbsc-col-sm-12 mbsc-col-md-4">
                            <mobiscroll.FormGroup>
                                <mobiscroll.FormGroupTitle>Mon-Sun</mobiscroll.FormGroupTitle>
                                <mobiscroll.Calendar
                                    selectType="week"
                                    defaultValue={fromMonday}
                                    firstSelectDay={1}
                                    firstDay={1}
                                    display="inline"
                                    type="hidden"
                                />
                            </mobiscroll.FormGroup>
                        </div>
                        <div className="mbsc-col-sm-12 mbsc-col-md-4">
                            <mobiscroll.FormGroup>
                                <mobiscroll.FormGroupTitle>Sat-Fri</mobiscroll.FormGroupTitle>
                                <mobiscroll.Calendar
                                    selectType="week"
                                    defaultValue={fromSaturday}
                                    firstSelectDay={6}
                                    firstDay={1}
                                    display="inline"
                                    type="hidden"
                                />
                            </mobiscroll.FormGroup>
                        </div>
                        <div className="mbsc-col-sm-12 mbsc-col-md-4">
                            <mobiscroll.FormGroup>
                                <mobiscroll.FormGroupTitle>Multiple</mobiscroll.FormGroupTitle>
                                <mobiscroll.Calendar
                                    selectType="week"
                                    defaultValue={twoWeeks}
                                    firstSelectDay={1}
                                    firstDay={1}
                                    select="multiple"
                                    display="inline"
                                    type="hidden"
                                />
                            </mobiscroll.FormGroup>
                        </div>
                    </div>
                </div>
            </mobiscroll.Form>
        );
    }
}
