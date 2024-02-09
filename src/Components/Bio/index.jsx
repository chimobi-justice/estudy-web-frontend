import { Modal } from 'flowbite-react';
import { useState } from 'react';
import useCreateProfileBio from '../../hooks/useCreateProfileBio';
import { errorNotification } from '../../helpers/notification';
import Button from '../Button';
import { Input } from 'antd';

const { TextArea } = Input;

const Bio = () => {
  const [openModal, setOpenModal] = useState(false);
  const [occupation, setOccupation] = useState('');
  const [bio, setBio] = useState('');

  const useCreateProfileBioMutation = useCreateProfileBio();

  const handleBioSubmit = (e) => {
    e.preventDefault();

    if (!occupation.trim() || !bio.trim()) {
      errorNotification('All fields are required');
      return;
    }

    useCreateProfileBioMutation.mutate({ occupation, bio });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'occupation') {
      setOccupation(value);
    } else if (name === 'bio') {
      setBio(value);
    }
  };

  return (
    <>
      <div>
        <Button
          label="Add Bio"
          bgColor="secondary"
          handleClick={() => setOpenModal(true)}
        />
      </div>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={handleBioSubmit}>
            <div className="my-6">
              <div className="mb-4">
                <Input
                  type="text"
                  placeholder="Occupation (eg Web Developer and online intructor)"
                  name="occupation"
                  value={occupation}
                  onChange={handleInputChange}
                  style={{ padding: '8px', borderRadius: '7px' }}
                />
              </div>
              <div className="my-4">
                <TextArea
                  cols={1}
                  rows={4}
                  className="resize-none"
                  placeholder="Enter Bio"
                  name="bio"
                  value={bio}
                  onChange={handleInputChange}
                  style={{ padding: '8px', borderRadius: '7px' }}
                />
              </div>

              <div>
                <Button
                  type="submit"
                  label="Save Bio"
                  bgColor="primary"
                  size="large"
                />
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Bio;
