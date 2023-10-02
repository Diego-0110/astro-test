export const prerender = false;

export async function GET({params, request}) {
  const response = await fetch('https://random-d.uk/api/v2/random')
  const responseJSON = await response.json()
  return new Response(
    JSON.stringify({
      duck: responseJSON.url
    })
  )
}