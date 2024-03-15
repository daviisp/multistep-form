type UserFormProps = {
  data: {
    name: string;
    email: string;
  };
  updateFieldHandler: (key: string, value: string) => void;
};

const UserForm = ({ data, updateFieldHandler }: UserFormProps) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Insira seu nome"
          required
          value={data.name || ""}
          onChange={(ev) => updateFieldHandler("name", ev.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Insira seu email"
          required
          value={data.email || ""}
          onChange={(ev) => updateFieldHandler("email", ev.target.value)}
        />
      </div>
    </div>
  );
};
export default UserForm;
