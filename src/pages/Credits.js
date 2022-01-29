//import logo from './logo.svg';
import '../App.css';
import * as React from 'react';
import { CenterModal, ModalTitle, ModalCloseTarget } from 'react-spring-modal';
import 'react-spring-modal/styles.css';



function Credits() {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className="Credits">
          <h1>Credits page!</h1>
          <p>
            Crediting a new page
          </p>
          <>
            <button onClick={() => setOpen(true)}>Open bottom modal</button>
            <CenterModal isOpen={isOpen} onDismiss={() => setOpen(false)}>
              {/* Defaults to <h1> and gives it an id to make it the label for your modal */}
              <ModalTitle>My Bottom Modal</ModalTitle>
              <p>Lorem ipsum dolor sit amet.</p>

              {/* Automatically adds onClick that dismisses modal */}
              <ModalCloseTarget>
                <button>Close</button>
              </ModalCloseTarget>
            </CenterModal>
          </>
    </div>
  );
}

export default Credits;
