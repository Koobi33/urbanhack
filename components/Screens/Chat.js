import React from 'react';
import { GiftedChat } from 'react-web-gifted-chat';
import View from 'react-native-web/dist/exports/View';
import ToHome from '../HelpingComponents/ToHome';
import GoBack from '../HelpingComponents/GoBack';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }
  state = {
    messages: [],
  };

  componentWillMount() {
    this.setState({
      messages: [
        {
          id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            id: 2,
            name: 'React',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    return (
      <View style={{flex: 1}}>
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          id: 1,
        }}
      />
        <GoBack {...this.props}/>
      </View>
    );
  }
}

export default Chat;
