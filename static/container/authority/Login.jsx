import React , {Component} from 'react';
import ReactDOM from 'react-dom';

import { Card ,Row, Col, Form, Icon, Input, Button,Checkbox} from 'antd';
import './styles/login.css';

const FormItem = Form.Item;

import cookie from 'utils/cookie';

class Login extends Component {

  static displayName = 'Login';

  constructor(props,context){
    super(props,context);
  }

  componentDidMount(){
    window.logout = this.logout;
    let {redirectPath} = this.props;
    if(redirectPath){
      cookie({selectMenu:redirectPath.split('?')[0]});
    }
  }

  logout = async () => {
    let {dispatch,actions} = this.props;
    await dispatch(actions.user.logout())
  }

  
  async login(values){
    let {dispatch,actions,redirectPath} = this.props;
    
    await dispatch(actions.user.login({...values}))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.login({...values})
      }
    });
  }
  
  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <div className='login-wraper'>
        <div className='login-card'>
        <Card hoverable={true} type="inner" style={{padding:'20px 0'}}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入用户名' }],
              })(
                <Input prefix={<Icon type="user" className='icon-style' />} placeholder="请输入用户名" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码' }],
              })(
                <Input prefix={<Icon type="lock" className='icon-style'  />} type="password" placeholder="请输入密码" />
              )}
            </FormItem>
            
            <Button 
              type="primary" 
              htmlType="submit" 
              style={{width:'100%'}}
            >
              登录
            </Button>
          </Form>
        </Card>
        </div>
      </div>
    )
  }
}

export default Form.create()(Login);
