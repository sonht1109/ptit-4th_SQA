import React from 'react';
import Add from './Add';

export default function Edit({
  handleSuccess,
  id,
}: {
  id: number;
  handleSuccess: () => void;
}) {
  return <Add {...{ id, handleSuccess }} />;
}
