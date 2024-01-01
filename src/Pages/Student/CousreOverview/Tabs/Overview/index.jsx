const Overview = ({description}) => {
    return (
      <>
        <div>
          <h2 className="font-bold">Course Description</h2>
          <p className="text-sm text-gray-500">
            {description}
          </p>
        </div>
      </>
    );
  };
  
  export default Overview;
  