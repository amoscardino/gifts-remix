import { Form, useSubmit } from "@remix-run/react";
import { useForm } from "react-hook-form";
import PersonDto from "../api/models/personDto";

interface PersonFormProps {
  person: PersonDto;
}

const PersonForm = ({ person }: PersonFormProps) => {
  const submit = useSubmit();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<PersonDto>({ defaultValues: person });

  const onSubmit = (data: PersonDto) => {
    submit({ ...data }, { method: 'POST' });
  };

  const onDelete = () => {
    submit({ id: person.id }, { method: 'POST', action: '/person/delete' });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} method="post" className="card border rounded shadow">
      <div className="card-header">
        {person.id ? 'Edit' : 'Add'} Person
      </div>

      <div className="card-body">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            id="name"
            className="form-control"
            {...register('name', {
              required: { value: true, message: 'Name is required' },
              maxLength: { value: 50, message: 'Name is too long' }
            })}
          />
          {errors.name && (
            <p className="text-danger">{errors.name.message}</p>
          )}
        </div>
      </div>

      <div className="card-footer hstack flex-row-reverse justify-content-between">
        <button type="submit" className="btn btn-primary">
          Save
        </button>

        {person.id && (
          <button
            type="button"
            onClick={onDelete}
            className="btn btn-outline-danger"
          >
            Delete
          </button>
        )}
      </div>

      <input type="hidden" {...register('id')} />
    </Form>
  );
};

export default PersonForm;
