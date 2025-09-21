export function Card({ name, email ,jd, iact,age})
{
    return (
        <div >
                    <h1>{name}</h1>
                    <p>{email}</p>
                    <p>{jd}</p>
                    <p>{iact}</p>
                    <p>{age}</p>
        </div>
    )
}