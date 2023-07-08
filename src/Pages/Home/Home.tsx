import { decrement, increment } from '../../Redux/Features/Counter/CounterSlice'
import { useAppDispatch, useAppSelector } from '../../Redux/ReduxHook.ts/hook'

export default function Home() {
  const count = useAppSelector((state) => state.counter.count)
  const dispatch = useAppDispatch()


  return (
    <div>
      <h1>Home</h1> <br /><br /><br />
      <button onClick={() => dispatch(decrement())} className="border p-4 inline-block">decrement -</button> {' '}
      <h1 className="inline-block text-4xl">{count}</h1> {' '}
      <button onClick={() => dispatch(increment())} className="border p-4">increment +</button>
    </div>
  )
}
