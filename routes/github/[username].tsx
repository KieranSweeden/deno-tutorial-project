import { Handlers, PageProps } from "$fresh/server.ts";

interface User {
  login: string;
  name: string;
  avatar_url: string;
}

export const handler: Handlers<User | null> = {
  async GET(_, ctx) {
    const { username } = ctx.params;
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (res.status === 404) {
      return ctx.render(null);
    }
    const user: User = await res.json();
    return ctx.render(user);
  },
};

export default function Page({ data: user }: PageProps<User | null>) {
  if (!user) {
    return <h1>User was not found</h1>;
  }

  return (
    <div>
      <img src={user.avatar_url} width={64} height={64} />
      <h1>{user.name}</h1>
      <p>{user.login}</p>
    </div>
  );
}
