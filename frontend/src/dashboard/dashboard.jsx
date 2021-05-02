import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title="Dashboard" small='Version 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' 
                            value='U$ 10.00' text='Credits total'/>
                        <ValueBox cols='12 4' color='red' icon='credit-card' 
                            value='U$ 10.00' text='Debts total'/>
                        <ValueBox cols='12 4' color='blue' icon='money' 
                            value='U$ 0.00' text='Consolidated value'/>
                    </Row>
                </Content>
            </div>
        )
    }
}

export default Dashboard