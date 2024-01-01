import { Skeleton as Loader} from 'antd';

const Skeleton = () => {
  return (
    <>
      <div>
        <Loader.Input
          active={true}
          block={true}
          size="default"
          style={{ height: '150px' }}
        />
      </div>

      <div style={{ marginTop: '15px', marginBottom: '15px' }}>
        <Loader.Input
          active={true}
          block={true}
          size="default"
          style={{ height: '150px' }}
        />
      </div>

      <div>
        <Loader.Input
          active={true}
          block={true}
          size="default"
          style={{ height: '150px' }}
        />
      </div>
    </>
  );
};

export default Skeleton;
