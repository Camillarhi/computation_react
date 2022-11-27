import React, { useState } from 'react'

export default function Home() {
    const [display, setDisplay] = useState(0);

    
    return (
        <form>
            <table className='text-center rounded mt-5 bg-secondary'>
                <tbody>
                    <tr>
                        <td colSpan={4}>
                            <input type="text" value={display} id="display" disabled className='cal_input me-3' />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="button" name="seven" className="cal_input numbers" defaultValue={7} />
                        </td>
                        <td>
                            <input type="button" name="eight" className="cal_input numbers" defaultValue={8} />
                        </td>
                        <td>
                            <input type="button" name="nine" className="cal_input numbers" defaultValue={9} />
                        </td>
                        <td>
                            <input type="button" className="cal_input operator" name="btnMath" defaultValue="%" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="button" name="four" className="cal_input numbers" defaultValue={4} />
                        </td>
                        <td>
                            <input type="button" name="five" className="cal_input numbers" defaultValue={5} />
                        </td>
                        <td>
                            <input type="button" name="six" className="cal_input numbers" defaultValue={6} />
                        </td>
                        <td>
                            <input type="button" id="sqrt" className="cal_input operator" name="sqrt" defaultValue="√" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="button" name="one" className="cal_input numbers" defaultValue={1} />
                        </td>
                        <td>
                            <input type="button" name="two" className="cal_input numbers" defaultValue={2} />
                        </td>
                        <td>
                            <input type="button" name="three" className="cal_input numbers" defaultValue={3} />
                        </td>
                        <td>
                            <input type="button" className="cal_input operator" name="multiply" defaultValue="*" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="button" name="zero" className="cal_input numbers" defaultValue={0} />
                        </td>
                        <td>
                            <input type="button" className="cal_input operator" name="plus" defaultValue="+" />
                        </td>
                        <td>
                            <input type="button" className="cal_input operator" name="minus" defaultValue="-" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="button" id="clear" className='cal_input ' name="clear" defaultValue="c" />
                        </td>
                        <td>
                            <input type="button" id="decimal" className='cal_input ' name="decPoint" defaultValue="." />
                        </td>
                        <td>
                            <input type="button" className="cal_input sum" name="doit" defaultValue="=" />
                        </td>
                        <td>
                            <input type="button" className="cal_input operator" name="div" defaultValue="/" />
                        </td>
                    </tr>
                </tbody></table>
        </form>

    )
}
