import React from 'react';
import { createRoot } from 'react-dom/client';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Segment from './Segment';

// const App = () => {
//   return (
//     <div className='ui container comments'>
//       <ApprovalCard>
//         <h4>Warning!</h4>
//         <div>Are you sure you want to do this?</div>
//       </ApprovalCard>
//       <ApprovalCard>
//         <CommentDetail
//           author='Sam'
//           timeAgo='Today at 4:45PM'
//           text='Nice blog post!'
//           photo={faker.image.image()}
//         />
//       </ApprovalCard>
//       <ApprovalCard>
//         <CommentDetail
//           author='Alex'
//           timeAgo='Today at 2:00AM'
//           text='I like this idea 😉'
//           photo={faker.image.image()}
//         />
//       </ApprovalCard>
//       <ApprovalCard>
//         <CommentDetail
//           author='Jane'
//           timeAgo='Yesterday at 5:00PM'
//           text='Sign me up!'
//           photo={faker.image.image()}
//         />
//       </ApprovalCard>
//     </div>
//   );
// };

// Exercise 1
// const App = () => {
//   return (
//     <div>
//       <Message
//         header='Attention!'
//         text='We just updated our privacy policy here to better service our customers.'
//       />
//     </div>
//   );
// };

// const Message = (props) => {
//   return (
//     <div className='ui message'>
//       <div className='header'>{props.header}</div>
//       <p>{props.text}</p>
//     </div>
//   );
// };

// Exercise 2
const App = () => {
  return (
    <div>
      <Segment>
        <div className='ui icon header'>
          <i className='pdf file outline icon'></i>
          No documents are listed for this customer.
        </div>
        <div className='ui primary button'>Add Document</div>
      </Segment>
      <Segment>
        <h4 class='ui header'>For Your Information</h4>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo.
        </p>
      </Segment>
    </div>
  );
};

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
