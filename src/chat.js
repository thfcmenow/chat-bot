import React from 'react';
import ChatBot from 'react-simple-chatbot';

const SimpleChatBotComponent = () => {
    const steps = [
        {
          id: '1',
          message: 'Hello how may I help you?',
          trigger: '2',
        },
        {
          id: '2',
          options: [
            { value: 'Lookup Cisco Serial', label: 'Lookup Cisco Serial', trigger: 'lookup_serial' }
          ],
        },
        {
          id: 'lookup_serial',
          message: 'Please enter your Cisco serial number',
          trigger: 'serial',
        },
        {
          id: 'serial',
          user: true,
          trigger: 'serial-response',
        },
        {
          id: 'serial-response',
          waitAction: true,
          trigger: '1',
        }
      ];

  return <ChatBot steps={steps} />;
};

export default SimpleChatBotComponent;
