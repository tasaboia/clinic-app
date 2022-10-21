import React , {SetStateAction, useRef} from 'react'
import { Button, Center, AlertDialog } from "native-base";
import Loading from './Loadding';

interface IProp {
  isOpen: boolean,
  setIsOpen: (value: boolean) => void,
  HandleSubmit: () => void,
  loading: boolean,
}

export const CustomAlertDialog = ({isOpen, setIsOpen, HandleSubmit, loading}: IProp) => {

  const onClose = () => setIsOpen(false);

  const cancelRef = React.useRef(null);
  return <Center>
      <>
        <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
          <AlertDialog.Content>
            { loading ? < Loading/> :
              <>
              <AlertDialog.CloseButton />
              <AlertDialog.Header>Criar conta de usuário</AlertDialog.Header>
              <AlertDialog.Body>
                Ao confirma sua conta e suas informações serão armazenada no nosso banco de dados.
              </AlertDialog.Body>
              
              <AlertDialog.Footer>
                <Button.Group space={2}>
                  <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                    Cancelar
                  </Button>
                  <Button colorScheme="green" onPress={HandleSubmit}>
                    Enviar
                  </Button>
                </Button.Group>
              </AlertDialog.Footer>
              </>
            }

          </AlertDialog.Content>
        </AlertDialog>
      </>
    </Center>;
};