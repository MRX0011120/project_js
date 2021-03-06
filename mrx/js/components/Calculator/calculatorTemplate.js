Template.prototype.calculatorTemplate = () => `
    <div class="calcInputs">
        <div class="getValueInputs">
            <textarea placeholder="0" class="number" id="firstNumber"></textarea>
            <textarea placeholder="0" class="number" id="secondNumber"></textarea>
        </div>

        <div class="results">
            <textarea  class="resultNumber" id="resultNumber" disabled></textarea>
        </div>
    </div>
    <div class="operandButtons">
        <button class="operands" data-operand="add"> + </button>
        <button class="operands" data-operand="sub"> - </button>
        <button class="operands" data-operand="mult"> * </button>
        <button class="operands" data-operand="divide"> / </button>
        <button class="operands" data-operand="prod"> Prod </button>
        <button class="operands" data-operand="zero"> Zero </button>
        <button class="operands" data-operand="one"> One </button>
        <button class="operands" data-operand="pow"> Pow </button>
    </div>
`;