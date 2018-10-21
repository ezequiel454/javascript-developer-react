import React, { Component } from 'react'
import ActionCreators from '../redux/actionCreators'
import { connect } from 'react-redux'
import moment from 'moment'
import Radar from '../component/Radar'
import TextLine from '../component/TextLine'
import TextLineAverage from '../component/TextLineAverage'

import { Layout, Menu, Icon, Breadcrumb, List, Card, Avatar, Row, Col } from 'antd';

const { Header, Sider, Content } = Layout;

class Home extends Component{   
    state = {
      collapsed: false,
      studentAverage: 0,
      seriesAverage: 0,
      classAverage: 0
    }
    toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    }
    calcular = (date1) => {
      return moment(date1).startOf('day').fromNow()
    }
    perfil = () =>{
      return this.props.person.data.perfil
    }

    render(){
        return (
            <div>
              {
                !this.props.person.isLoading &&
                <Layout >
                  <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    style={{height: 1300}}
                  >
                    {
                      !this.state.collapsed &&
                      <div className="logo" style={{padding: 10, height: 64, background: '#001B3F', paddingLeft: 24}}>
                        <p style={{marginTop: 10, marginBottom: 0, color: 'white'}}>Ezequiel Matos</p>
                      </div>
                    }
                    {
                      this.state.collapsed &&
                      <div className="logo" style={{padding: 2, height: 64, background: '#001B3F', paddingLeft: 12}}>
                        <p style={{marginTop: 10, marginBottom: 0, color: 'white'}}>Ezequiel Matos</p>
                      </div>
                    }
                    <Menu theme="dark" mode="inline">
                      <Menu.Item key="1">
                        <Icon type="dashboard" />
                        <span>Dashboard</span>
                      </Menu.Item>
                    </Menu>
                  </Sider>
                  <Layout>
                    <Header style={{ background: '#fff', padding: 2, marginLeft: 2 }}>
                      <Icon
                        className="trigger"
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle} style={{marginLeft: 22, fontSize: 24}}
                      />
                    </Header>
                    <div style={{height: '180px'}}>
                      <Content style={{ margin: '2px 2px', padding: 10, background: '#fff', height: 176 }}>
                        <Breadcrumb style={{fontSize: 16, marginLeft: 22, marginTop: 4}}>
                          <Breadcrumb.Item>Home</Breadcrumb.Item>
                          <Breadcrumb.Item>Alunos</Breadcrumb.Item>
                          <Breadcrumb.Item>{this.props.person.data.matricula}</Breadcrumb.Item>
                        </Breadcrumb>


                        <div>
                          <Row>
                            <Col xs={10} sm={8} md={8} lg={3} xl={2} style={{marginTop: 10, marginLeft: 24}}><Avatar size={100} icon="user"/></Col>
                            <Col xs={1} sm={1} md={2} lg={10} xl={13}>
                              <b><p style={{fontSize: 22, marginTop: 20}}>{this.props.person.data.nome}</p></b>
                              <p style={{fontSize: 16, marginBottom: 10, color: '#A3A3A3'}}>Matrícula: {this.props.person.data.matricula}</p>
                            </Col>
                            <TextLine firstValue={8} secondValue={10} thirdValue={this.props.person.data.observacoes.length}/>
                          </Row>
                        </div>
                      </Content>
                    </div>
                    <div>
                    <Row>
                        <Col xs={23} sm={23} md={23} lg={9} xl={15} style={{marginTop: 10, marginLeft: 24, marginRight: 10}}>
                          <Content style={{ margin: 10, background: '#fff', width: '100%' }}>
                          <Card
                            title={<b><p style={{padding: 10, fontSize: 20, marginBottom: 0}}>Observações</p></b>}
                            style={{ width: "100%" }}
                          >
                            <List
                              itemLayout="horizontal"
                              dataSource={this.props.person.data.observacoes}
                              renderItem={item => (
                                <List.Item>
                                  <List.Item.Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title={<a href="https://ant.design">{item.descricao}</a>}
                                    description={this.calcular(item.data)}
                                  />
                                </List.Item>
                              )}
                            />
                          </Card>
                        </Content>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={13} xl={8}>
                          <Content style={{ margin: 20, background: '#fff', width: '100%' }}>
                            <Card 
                              title={<b><p style={{padding: 10, fontSize: 20, marginBottom: 0}}>Perfil do aluno</p></b>}
                              style={{ background: '#fff', width: '100%' }}>
                              <div style={{ height: 400, width: '100%' }}>
                                <Radar data={this.props.person.data.perfil} keys={["turma","aluno","serie"]} index={"eixo"}/> 
                              </div>
                              <div style={{marginTop: 50}}>
                                <TextLineAverage lista={this.props.person.data.perfil}/>
                              </div>
                            </Card>
                          </Content>
                        </Col>
                      </Row>
                    </div>
                  </Layout>
                </Layout>
              }
            </div>    
        )
    }                           
}       

const mapStateToProps = state => {
    return {
        person: state.person
    }
}    

const mapDispatchToProps = dispatch => {
    return {
        get: () => dispatch(ActionCreators.getPersonRequest())
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Home)